# CSCI 3172 Lab 1

Introductory Lab - Personal Profile

* *Date Created*: 10 01 2022
* *Last Modification Date*: 17 01 2022
* *Lab URL*: [https://web.cs.dal.ca/~osler/csci3172/lab1/](https://web.cs.dal.ca/~osler/csci3172/lab1/)
* *Git URL*: [https://git.cs.dal.ca/osler/l1_osler_liam](https://git.cs.dal.ca/osler/l1_osler_liam)

## Author
[Liam Osler](liamosler.ca)

## Deployment
Deployed to Dal's FCS web hosting per lab instructions:
https://web.cs.dal.ca/~osler/csci3172/lab1/


## Getting Started

This Lab uses the Bootstrap library. [Check out their getting started guide](https://getbootstrap.com/docs/5.0/getting-started/introduction/) for more details on setup.

### Prerequisites
[Bootstrap 4.0](https://getbootstrap.com/docs/4.0/)
is imported via CDN for this project.

## Project file structure:

I am going to segment the project in to files called main.js, 

```java
.
├── README.md
├── images
├── index.html
├── scripts
│   └── main.js
└── styles
    └── main.css
```

# index.html:


First, a simple HTML5 page snippet from Visual Studio Code:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <!-- body content goes here -->
    </body>
</html>
```

First we import Bootstrap's CSS and Javascript files at their appropriate locations:
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
```

We import the CSS file in the ```<head>``` section of the document and the javascript in the ```<body>```, giving us:

```html
<!-- Author: Liam Osler -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <title>Document</title>
    </head>

    <body>
        <!-- Bootstrap scripts: -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
</html>
```


Next, we will implement a container and row to contain our content:

```html

<div class="container-fluid">
    <!-- a row with the header of the project -->
    <div class="row">
        <div class="col-xl">
            <h1 class="display-1 my-name">Liam Osler</h1>
        </div>
    </div>
    <hr>
    <!-- a row with a link to my homepage and social media accounts: -->
    <div class="row">
        <div class="col-12">
            <p class="display-3">find me online:</a>
        </div>
        <div class="col-sm">
            <a href = "http://www.liamosler.ca" class="display-4">personal website</a>
        </div>
        <div class="col-sm">
            <a class="display-4" href= "https://github.com/LiamOsler">github profile</a>
        </div>
        <div class="col-sm">
            <a class="display-4" href= "https://github.com/LiamOsler">youtube channel</a>
        </div>
    </div>  
    <hr>

    <!-- a row with links to past projects and other work I wish to highlight  -->
    <div class="row">
        <div class="col-12">
            <p class="display-3">sample projects:</a>
        </div>

        <div class="col-sm">
            <a href = "http://liamosler.ca/demos/rss-aggregator/" class="display-4">news aggregator</a>
            <p> </p>
            <p>scrapes local news rss feeds for nova scotia, developed with php and js - <a href = "https://github.com/LiamOsler/rss-aggregator"> source on github</a></p>
        </div>
    
    <!-- for brevity, I have excluded the links to my other projects -->
    
    </div>
    <hr>
    <!-- a row with a link to my homepage and social media accounts: -->
    <div class="row">
        <div class="col-12">
            <p class="display-3">contact me:</a>
        </div>
        <div class="col-sm">
            <a href = "mailto:liam.osler@dal.ca" class="display-4">liam.osler@dal.ca</a>
        </div>
    </div>  
    <hr>
</div>
```

main.css:
```css
/* CSS for CSCI3172 Lab 1 */
/* Global overrides: */
body{

}

/* using a font-size transition is a visually pleasing way to draw attention to a link: */
a{
    transition: font-size 1s;
    font-size: 1em;
}

a:hover{
    font-size: larger;
}

/* My name, the page header, in a business card style: */
.my-name{
    font-size: 8em;
}

/* Page Typography: */
.display-1{
    font-size: 10em;
    transition: font-size 0.5s;
}

.display-1:hover{
    font-size: 12em;
}

.display-2{
    font-size: 5em;
    transition: font-size 0.5s;
}

.display-3{
    font-size: 4em;
}

.display-4{
    font-size: 3em;
    transition: font-size 0.5s;
}

.display-4:hover{
    font-size: 3.5em;
}

```


## Sources Used
[Bootstrap - Introduction](https://getbootstrap.com/docs/4.6/getting-started/introduction/)

[W3Schools - CSS Transitions](https://www.w3schools.com/css/css3_transitions.asp)