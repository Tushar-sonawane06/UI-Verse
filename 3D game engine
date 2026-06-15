#include "raylib.h"
#include <iostream>

// =====================================================================================
// 1. ENGINE MATH LAYER
// =====================================================================================
// Custom Engine Actor Structure defining physical attributes within the 3D grid space
struct EngineTransform {
    Vector3 position;
    Vector3 rotation;
    Vector3 scale;
    Color color;
};

// =====================================================================================
// 2. COMPONENT ENTITY CONTROLLER
// =====================================================================================
// Handles low-level keyboard scans and calculates movement vectors
class PlayerController {
public:
    float speed = 12.0f;
    float rotationSpeed = 2.5f;

    void ProcessInput(Camera3D& camera, float deltaTime) {
        // Linear movement updates (W/S keys translate forward/backward vectors)
        if (IsKeyDown(KEY_W)) camera.position.z -= speed * deltaTime;
        if (IsKeyDown(KEY_S)) camera.position.z += speed * deltaTime;
        if (IsKeyDown(KEY_A)) camera.position.x -= speed * deltaTime;
        if (IsKeyDown(KEY_D)) camera.position.x += speed * deltaTime;

        // Vertical movement updates (Space/Left-Ctrl)
        if (IsKeyDown(KEY_SPACE)) camera.position.y += speed * deltaTime;
        if (IsKeyDown(KEY_LEFT_CONTROL)) camera.position.y -= speed * deltaTime;
    }
};

// =====================================================================================
// 3. GRAPHICS PIPELINE & WINDOW SUBSYSTEM
// =====================================================================================
class Custom3DEngine {
private:
    int screenWidth;
    int screenHeight;
    const char* windowTitle;
    bool isRunning;

    Camera3D gameCamera;
    PlayerController playerController;

    // Simulation Game Object State
    EngineTransform testCube;
    EngineTransform testSphere;

public:
    Custom3DEngine(int width, int height, const char* title) 
        : screenWidth(width), screenHeight(height), windowTitle(title), isRunning(false) {}

    // Initializes Engine subsystems and graphic allocation pipelines
    void Initialize() {
        InitWindow(screenWidth, screenHeight, windowTitle);
        SetTargetFPS(60); // Establishes internal system frame locks
        
        // Setup structural perspective frustum properties
        gameCamera.position = (Vector3){ 0.0f, 4.0f, 12.0f }; // Camera X, Y, Z layout placement
        gameCamera.target = (Vector3){ 0.0f, 0.0f, 0.0f };   // Focus coordinate center
        gameCamera.up = (Vector3){ 0.0f, 1.0f, 0.0f };       // Define camera Y alignment direction
        gameCamera.fovy = 60.0f;                             // Perspective Field-of-View angle
        gameCamera.projection = CAMERA_PERSPECTIVE;          // Enables multi-depth convergence matrices

        // Generate geometry asset data into spatial transforms
        testCube = { { -2.0f, 1.0f, 0.0f }, { 0.0f, 0.0f, 0.0f }, { 2.0f, 2.0f, 2.0f }, RED };
        testSphere = { { 2.0f, 1.0f, 0.0f }, { 0.0f, 0.0f, 0.0f }, { 1.5f, 1.5f, 1.5f }, BLUE };

        isRunning = true;
        std::cout << "[SUCCESS] 3D Game Engine Engine Subsystems Successfully Up." << std::endl;
    }

    // Engine Frame Update Phase
    void Update(float deltaTime) {
        // Query the keyboard input subsystem
        playerController.ProcessInput(gameCamera, deltaTime);

        // Simple continuous procedural engine tick modification (rotate components over runtime)
        testCube.rotation.y += 45.0f * deltaTime;
    }

    // Engine Render Frame Phase (Converts scene database directly into viewport textures)
    void Render() {
        BeginDrawing();
        ClearBackground(DARKGRAY); // Resets target graphics buffers

        // STEP 1: Enter 3D Perspective Projection Mode
        BeginMode3D(gameCamera);

            // Draw spatial environment bounds grid (Provides a scale reference point)
            DrawGrid(20, 1.0f);

            // Framebuffer Render Call: Drawing the Cube with spatial rotation adjustments
            DrawCubeEx(testCube.position, testCube.scale, testCube.rotation.y, testCube.color);
            DrawCubeWiresEx(testCube.position, testCube.scale, testCube.rotation.y, BLACK); // Accent silhouette line

            // Framebuffer Render Call: Draw structural spheres
            DrawSphere(testSphere.position, testSphere.scale.x, testSphere.color);
            DrawSphereWires(testSphere.position, testSphere.scale.x, 16, 16, BLACK);

        EndMode3D(); // Exit 3D Projection Engine Space

        // STEP 2: Render Flat 2D Debug Overlay Over Frames
        DrawRectangle(10, 10, 320, 140, Fade(BLACK, 0.6f));
        DrawFPS(20, 20);
        DrawText("ENGINE SUBSYSTEM: ACTIVE", 20, 50, 16, GREEN);
        DrawText("Controls: WASD to Move | Space/Ctrl for Elevate", 20, 80, 12, WHITE);
        
        // Print real-time floating-point calculations derived from engine loops
        DrawText(TextFormat("Camera Pos: X: %.2f | Y: %.2f | Z: %.2f", 
                 gameCamera.position.x, gameCamera.position.y, gameCamera.position.z), 20, 110, 12, RAYWHITE);

        EndDrawing();
    }

    // Engine Shutdown Pipeline Lifecycle execution
    void Shutdown() {
        CloseWindow();
        std::cout << "[SHUTDOWN] Engine Subsystems Safely Released." << std::endl;
    }

    bool IsRunning() {
        return isRunning && !WindowShouldClose();
    }
};

// =====================================================================================
// 4. MAIN SYSTEM ENTRY ENTRYPOINT
// =====================================================================================
int main() {
    // Instantiate Custom Instance
    Custom3DEngine coreEngine(1280, 720, "Custom 3D Game Engine [C++ / Raylib]");

    coreEngine.Initialize();

    // The Master Engine Game Loop
    while (coreEngine.IsRunning()) {
        float dt = GetFrameTime(); // Captures true precise hardware delta time

        coreEngine.Update(dt);     // Process physics, animations, matrices
        coreEngine.Render();       // Push vector array arrays to the GPU
    }

    coreEngine.Shutdown();
    return 0;
}
