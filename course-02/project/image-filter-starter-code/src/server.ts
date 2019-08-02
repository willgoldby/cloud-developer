import express, { Router, Request, Response } from 'express';

import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json())

app.get("/filteredimage", ( req: Request, res: Response) => {
  // 1. validate the image_url query
  let { image_url } = req.query;
  if ( !image_url ){
    return res.status(400).send(`image url is required.`);
  }
  
  // 2. call filterImageFromURL(image_url) to filter the image
  const image_path = filterImageFromURL(image_url);
  
  // 3. send the resulting file in the response
  
  // Create array to hold file paths.
  let image_location: Array<string> = [];
  
  // Get promise value into a string
  image_path.then(strValue => {
    //send file to server
    res.status(200).sendFile(strValue)
    // print string of file location
    console.log(strValue);
    // Push file location into the array
    image_location.push(strValue);
  })
  // Print the array's values
  .then(() => console.log(image_location));
  
  //4. deletes any files on the server on finish of the response
  deleteLocalFiles(image_location);

});

  // 4. 
  //image_path.then(strValue => {
  


  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    
  //    
  
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  // app.get( "/", async ( req, res ) => {
  //    res.send("try GET /filteredimage?image_url={{}}")
  // } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
