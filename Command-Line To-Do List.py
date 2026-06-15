class TodoList:
    def __init__(self):
        self.tasks = []

    def add_task(self, task_name):
        self.tasks.append({"task": task_name, "completed": False})
        print(f"Added task: '{task_name}'")

    def view_tasks(self):
        if not self.tasks:
            print("\nYour to-do list is empty.")
            return
        print("\n--- Your To-Do List ---")
        for index, task in enumerate(self.tasks, start=1):
            status = "✅ Completed" if task["completed"] else "❌ Pending"
            print(f"{index}. {task['task']} [{status}]")

    def complete_task(self, index):
        if 0 <= index < len(self.tasks):
            self.tasks[index]["completed"] = True
            print(f"Task '{self.tasks[index]['task']}' marked as completed.")
        else:
            print("Invalid task number.")

    def delete_task(self, index):
        if 0 <= index < len(self.tasks):
            removed = self.tasks.pop(index)
            print(f"Deleted task: '{removed['task']}'")
        else:
            print("Invalid task number.")

# Execution Loop
if __name__ == "__main__":
    todo = TodoList()
    while True:
        print("\nOptions: 1. Add Task | 2. View Tasks | 3. Complete Task | 4. Delete Task | 5. Exit")
        choice = input("Choose an option (1-5): ").strip()

        if choice == "1":
            name = input("Enter the task description: ")
            todo.add_task(name)
        elif choice == "2":
            todo.view_tasks()
        elif choice == "3":
            todo.view_tasks()
            try:
                num = int(input("Enter the number of the task to complete: ")) - 1
                todo.complete_task(num)
            except ValueError:
                print("Please enter a valid integer.")
        elif choice == "4":
            todo.view_tasks()
            try:
                num = int(input("Enter the number of the task to delete: ")) - 1
                todo.delete_task(num)
            except ValueError:
                print("Please enter a valid integer.")
        elif choice == "5":
            print("Goodbye!")
            break
        else:
            print("Invalid selection. Please try again.")
