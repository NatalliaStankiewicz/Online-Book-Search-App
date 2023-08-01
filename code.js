import {LightningElement} from 'lwc';

export default class OnlineBook extends LightningElement {
    booksInfor=[];
    apiURL = 'https://www.googleapis.com/books/v1/volumes?q=';
    retrieveBooks(){
        fetch(this.apiURL)
        .then(response=>response.json())
        .then(data=>{
            this.booksInfor=data.items
            console.log(this.booksInfor)
        })
        .catch(error=>console.log(error))
    }
    connectedCallback(){
        this.apiURL = 'https://www.googleapis.com/books/v1/volumes?q=animals'
         this.retrieveBooks()
    }

    handleChange(event){
        this.apiURL = 'https://www.googleapis.com/books/v1/volumes?q='+ event.target.value
        this.retrieveBooks()
    }


}
