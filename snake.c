#include "raylib.h"
#include <stdlib.h>

#define SCREEN_WIDTH 800
#define SCREEN_HEIGHT 600
#define GRID_SIZE 20
#define MAX_SNAKE_LENGTH 100

// Define structures for game entities
typedef struct Snake {
    Vector2 position[MAX_SNAKE_LENGTH];
    Vector2 speed;
    int length;
    Color color;
} Snake;

typedef struct Food {
    Vector2 position;
    Color color;
    bool active;
} Food;

// Global game states
static Snake snake = { 0 };
static Food food = { 0 };
static bool gameOver = false;
static int score = 0;
static int framesCounter = 0;

// Function prototypes
void InitGame(void);
void UpdateGame(void);
void DrawGame(void);

int main(void) {
    InitWindow(SCREEN_WIDTH, SCREEN_HEIGHT, "Classic Snake Game in C");
    InitGame();
    SetTargetFPS(60);

    // Main game loop
    while (!WindowShouldClose()) {
        UpdateGame();
        DrawGame();
    }

    CloseWindow();
    return 0;
}

// Initialize game variables
void InitGame(void) {
    gameOver = false;
    score = 0;
    framesCounter = 0;
    
    // Setup initial snake properties
    snake.length = 3;
    snake.speed = (Vector2){ GRID_SIZE, 0 };
    snake.color = DARKGREEN;
    
    // Position snake in the center
    for (int i = 0; i < snake.length; i++) {
        snake.position[i] = (Vector2){ (SCREEN_WIDTH / 2) - (i * GRID_SIZE), SCREEN_HEIGHT / 2 };
    }

    // Spawn first food item
    food.color = RED;
    food.active = true;
    food.position = (Vector2){ 
        (rand() % (SCREEN_WIDTH / GRID_SIZE)) * GRID_SIZE, 
        (rand() % (SCREEN_HEIGHT / GRID_SIZE)) * GRID_SIZE 
    };
}

// Handle logic, input, and physics
void UpdateGame(void) {
    if (gameOver) {
        if (IsKeyPressed(KEY_ENTER)) InitGame();
        return;
    }

    // Input monitoring (Prevents moving directly backwards into yourself)
    if (IsKeyPressed(KEY_RIGHT) && snake.speed.x == 0) snake.speed = (Vector2){ GRID_SIZE, 0 };
    if (IsKeyPressed(KEY_LEFT) && snake.speed.x == 0) snake.speed = (Vector2){ -GRID_SIZE, 0 };
    if (IsKeyPressed(KEY_UP) && snake.speed.y == 0) snake.speed = (Vector2){ 0, -GRID_SIZE };
    if (IsKeyPressed(KEY_DOWN) && snake.speed.y == 0) snake.speed = (Vector2){ 0, GRID_SIZE };

    // Control game speed (Update movement every 7 frames)
    framesCounter++;
    if (framesCounter % 7 == 0) {
        // Shift body array positions forward
        for (int i = snake.length - 1; i > 0; i--) {
            snake.position[i] = snake.position[i - 1];
        }

        // Advance head position
        snake.position[0].x += snake.speed.x;
        snake.position[0].y += snake.speed.y;

        // Wall collisions check
        if ((snake.position[0].x < 0) || (snake.position[0].x >= SCREEN_WIDTH) ||
            (snake.position[0].y < 0) || (snake.position[0].y >= SCREEN_HEIGHT)) {
            gameOver = true;
        }

        // Self-collision check
        for (int i = 1; i < snake.length; i++) {
            if (snake.position[0].x == snake.position[i].x && snake.position[0].y == snake.position[i].y) {
                gameOver = true;
            }
        }

        // Food collision check
        if (snake.position[0].x == food.position.x && snake.position[0].y == food.position.y) {
            if (snake.length < MAX_SNAKE_LENGTH) {
                snake.length++;
            }
            score += 10;
            // Respawn food randomly inside grid lines
            food.position = (Vector2){ 
                (rand() % (SCREEN_WIDTH / GRID_SIZE)) * GRID_SIZE, 
                (rand() % (SCREEN_HEIGHT / GRID_SIZE)) * GRID_SIZE 
            };
        }
    }
}

// Handle visual presentation
void DrawGame(void) {
    BeginDrawing();
    ClearBackground(RAYWHITE);

    if (!gameOver) {
        // Draw food node
        DrawRectangleV(food.position, (Vector2){ GRID_SIZE, GRID_SIZE }, food.color);

        // Draw snake nodes
        for (int i = 0; i < snake.length; i++) {
            DrawRectangleV(snake.position[i], (Vector2){ GRID_SIZE, GRID_SIZE }, snake.color);
        }

        // Display Score HUD
        DrawText(TextFormat("SCORE: %04d", score), 10, 10, 20, GRAY);
    } else {
        // Display Game Over Interface
        DrawText("GAME OVER", SCREEN_WIDTH / 2 - 110, SCREEN_HEIGHT / 2 - 40, 40, RED);
        DrawText("PRESS [ENTER] TO PLAY AGAIN", SCREEN_WIDTH / 2 - 180, SCREEN_HEIGHT / 2 + 10, 20, DARKGRAY);
    }

    EndDrawing();
}
