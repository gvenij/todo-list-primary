class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        view.on('add', this.addTodo.bind(this));
        view.on('toggle', this.toggleTodo.bind(this));
        view.on('edit', this.editTodo.bind(this));
        view.on('remove', this.removeTodo.bind(this));
        view.on('primary', this.primaryTodo.bind(this));
        view.on('sort', this.sortTodo.bind(this));

        view.show(model.items);
    }
 
    addTodo(title) {
        const item = this.model.addItem({
            id: Date.now(),
            title,
            completed: false,
            primary: false
        });

        this.view.addItem(item);
    }

    toggleTodo({ id, completed }) {
        const item = this.model.updateItem(id, { completed });

        this.view.toggleItem(item);
    }

    editTodo({ id, title }) {
        const item = this.model.updateItem(id, { title });
        
        this.view.editItem(item);
    }

    removeTodo(id) { 
        this.model.removeItem(id);
        this.view.removeItem(id); 
    }

    primaryTodo({id, primary}){
        const item = this.model.updateItem(id, { primary });

        this.view.primaryItem(item);
    }

    sortTodo(param){
        const sortedItems = this.model.sortItems(param);

        this.view.show(sortedItems);
    }
}

export default Controller;