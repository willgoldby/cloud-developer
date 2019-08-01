import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

app.get("/filteredimage", (req: Request, res: Response) => {
  // 1. validate the image_url query
  let { image_url } = req.query;
  if ( !image_url ){
    return res.status(400).send(`image url is required.`);
  }
  
  // 2. call filterImageFromURL(image_url) to filter the image
  const image_path = filterImageFromURL(image_url);
  
  // 3. send the resulting file in the response
  image_path.then(strValue => {
    res.sendFile(strValue)
  });

});


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




// // image_path is Promise<string>
// const image_path = filterImageFromURL(image_url);

// // This should send file
// image_path.then(strValue => {
//   res.sendFile(strValue)
// });