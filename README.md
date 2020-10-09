# Note Taker

![Contents](https://img.shields.io/github/languages/top/dan-gentile/note-taker)
![Last-Commit](https://img.shields.io/github/last-commit/dan-gentile/note-taker)
![License](https://img.shields.io/github/license/dan-gentile/note-taker)

## Description 

This application is designed for the user to be able to write and save notes. They can also delete notes they have save. This app was created to solve the problem that is it's easy to forget tasks especially when there's a lot of information 

You can use the app here: <https://note-taker-2105.herokuapp.com/>


## Table of Contents

- [Title](#title)
- [Description](#description)
- [Technologies](#technologies)
- [Table of Contents](#table-of-contents)
- [Usage](#usage)
- [Screenshots](#screenhots)
- [Code Snippets](#code-snippets)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Technologies 

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)


## Usage

To use this app please go to the deployed link below:
<https://note-taker-2105.herokuapp.com/>

## Screenshots 
--Notes Page--
<img width="695" alt="Screen Shot 2020-10-08 at 5 31 38 PM" src="https://user-images.githubusercontent.com/68626350/95528143-2671dd80-098c-11eb-83cf-ac4af2caf684.png">

## Code Snippets

Removing saved elements after hitting the trash can
~~~
router.delete("/notes/:id", function(req, res) {
    const removeData = parseInt(req.params.id);
    const deleteFileData = JSON.parse(fs.readFileSync("data/db.json", { encoding: 'utf8', flag: 'r' }));
    for (let i = 0; i < deleteFileData.length; i++) {
        // if the id is equal to removeData remove delete item from array
        if (deleteFileData[i].id === removeData) {
            deleteFileData.splice(i, 1);
        };
    };
    fs.writeFileSync("data/db.json", JSON.stringify(deleteFileData, null, 2));
    return res.send("delete");
});
~~~


## License 

This license is [MIT](https://github.com/dan-gentile/note-taker/blob/master/LICENSE)

Copyright (c) 2020 Dan Gentile 

## Contributing 


1. Clone repo and create a new branch: 
~~~
$ git checkout -b name_for_new_branch.
~~~
2. Make changes and commit: 
~~~
$ git add . 
$ git commit -m "made changes"
~~~
3. Push to the branch:
~~~
$ git push
~~~
4. Submit Pull Request with comprehensive description of changes


## Questions 

If you have any questions and would like to get in touch please email me! 
email: dangentile@ymail.com