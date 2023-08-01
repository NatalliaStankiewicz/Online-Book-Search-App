# Online-Book-Search-App
This app allows you to find the book you want very efficiently.

html

<template>
    <lightning-card>
        <lightning-input
        label="Search book by name"
        type="search"
        class="slds-m-left_medium slds-m-right_medium slds-m-bottom_medium"
        onchange={handleChange}
    ></lightning-input>
       <lightning-layout multiple-rows>
          <template for:each={booksInfor} for:item="book">    
            <div key={book.id}>
                <lightning-layout-item 
                size="3" 
                class="slds-box">
                    <img src={book.volumeInfo.imageLinks.thumbnail}>
                    <p><strong>{book.volumeInfo.title}</strong></p>
                    <p>Published date: <strong>{book.volumeInfo.publishedDate}</strong></p>
                    <p>Average rating: <strong>{book.volumeInfo.averageRating}</strong></p>
                </lightning-layout-item>
            </div>
          </template>
        
        </lightning-layout>
    </lightning-card>
</template> 

js

import { LightningElement } from 'lwc';

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
