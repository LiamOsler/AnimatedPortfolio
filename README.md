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










## Sources Used
[Bootstrap Docs]()

### File Name
