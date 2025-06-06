// const fs = require('fs');
// const superagent = require('superagent');

// fs.readFile(`${__dirname}/dog.txt`, (err, data) =>{
//     console.log(`Breed: ${data}`);

//     superagent
//         .get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .end((err,res) =>{
//         if (err) return console.log(err.message);
//          console.log(res.body.message);

//          fs.writeFile('dog-img.txt', res.body.message, err => {
//             console.log('Random dog image saved')
//          });
//     })
// });



// const fs = require('fs');
// const superagent = require('superagent');

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//     console.log(`Breed: ${data}`);

//     superagent
//         .get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .then(res => {
//             console.log(res.body.message);

//             fs.writeFile('dog-img.txt', res.body.message, err => {
//                 if (err) return console.log(err.message);
//                 console.log('Random image saved')
//             })
//         })
//         .catch(err => {
//             console.log(err.message);
//         })
// });




// const fs = require('fs');
// const superagent = require('superagent');

// const readFilePro = file => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(file, (err, data) => {
//             if (err) reject('I could not find that file ')
//             resolve(data);
//         })
//     })
// }

// const writeFilePro = (file, data) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(file, data, err => {
//             if (err) reject('Could not write file');
//             resolve('success');
//         });
//     });
// }

// readFilePro(`${__dirname}/dog.txt`)
//     .then(data => {

//     console.log(`Breed: ${data}`);

//      return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
//         })
//         .then(res => {
//             console.log(res.body.message);

//             return writeFilePro('dog-img.txt', res.body.message)

//             // fs.writeFile('dog-img.txt', res.body.message, err => {
//             //     if (err) return console.log(err.message);
//             //     console.log('Random image saved')
//             // })


//         })
//         .then(() => {
//             console.log('Random image saved');
//         })
//         .catch(err => {
//             console.log(err);
//         })



        const fs = require('fs');
        const express = require('express');

        const app = express();

        app.use(express.json());




        const tours = JSON.parse(
            fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
        );

        const getAllTours = (req, res) => {
            res.status(200).json({
                status: 'success',
                results: tours.length,
                data: {
                    tours
                }
            });
        }

        const getTour = (req, res) => {
            console.log(req.params);
            const id = req.params.id = 1;

            const tour = tours.find(el => el.id === id);

            if(!tour){
                return res.status(404).json({
                    status: 'fail',
                    message: 'Invalid ID'
                });
            }
    
            res.status(200).json({
                status: 'success',
                data: {
                    tour
                }
            });

            
        }


        const createTour = (req, res) =>{
            const newId = tours(tours.length - 1).id + 1;
            const newTour = Object.assign({ id: newId}, req.body);

            tours.push(newTour);

            fs.writeFile(
                `${__dirname}/dev-data/data/tours-simple.json`,
                JSON.stringify(tours),
                err =>{
                    res.status(201).json({
                        status: 'success',
                        data: {
                            tour : {
                                tour: newTour
                            }
                        }
                    });
                }
            )
        }

        const updateTour = (req, res) => {
            if(req.params.id * 1 > tours.length){
                return res.status(404).json({
                    status: 'fail',
                    message: 'Invalid ID'
                });
            }

            res.status(200).json({
                status: 'success',
                data: {
                    tour: '<Updated tour>'
                }
            });
        }


        const deleteTour = (req, res) =>{
            if(req.params.id * 1 > tours.length){
                return res.status(404).json({
                    status: 'fail',
                    message: 'Invalid ID'
                });
            }

            res.status(204).json({
                status: 'success',
                data: null
            });
        }


        // app.get('/api/v1/tours', getAllTours);

        // app.get('/api/v1/tours/:id', getTour);

        // app.post('/api/v1/tours',createTour);

        // app.patch('/api/v1/tours/:id',updateTour);

        // app.delete('/api/v1/tours/:id', deleteTour);


        app
            .route('api/v1/tours')
            .get(getAllTours)
            .post(createTour);

        app
            .route('/api/v1/tours/:id')
            .get(getTour)
            .patch(updateTour)
            .delete(deleteTour);
        

        const port = 3000;
        app.listen(port, () => {
            console.log(`App running on port ${port}`);
        })