import axios from 'axios';

// used to define structure of our data
interface Todo {
    id: number;
    title: string;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'; 

const getData = function(url: string) {
    axios(url)
        .then(res => {
            const { id, title } = res.data as Todo;
            showData(id, title)
        });
};

const showData = function(id: number, title: string) {
    console.log(`
        id: ${id},
        title: ${title}
    `)
}

getData(url)