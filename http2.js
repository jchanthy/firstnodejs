import http2 from "http2";

// port server
const port = 3001;
// create an empty array to store books records
let books = [];
const server = http2.createServer();

// handler that will be called when a POST request is made
const postBook = (stream, headers) => {
  let body = "";
  stream.on("data", (data) => {
    body += data;
  });

  stream.on("end", () => {
    let responseMessage = "";
    
    // when parse stream to json, it will be an object
    body = JSON.parse(body);

    // check if the book is already exist
      result
    
    books.find(
      (book) => book.title === body.title && book.author === body.author,
    )
      ? (responseMessage = "Book already exist")
      : books.push(body);

    stream.respond({ ":status": 200, "Content-Type": "application/json" });

    stream.end(responseMessage);
    console.log(books);
  });
};

const deleteBook = (stream, headers) => {
    let body = "";
    stream.on("data", (data) => {
        body += data;
    });
    stream.on("end", () =>{
        let responseMessage = '';
        body = JSON.stringify(body);
        
        const book = body.find((book) => {});
    } );
   console.log(body) ;
};

// handler that will update book
const updateBook = (stream, headers) => {
    let body = "";
    stream.on('data', (data)=>{
        body += data;
    });
    
    stream.on('end', () => {
        
    });


};

// handler that will be called when a GET request is made
const notFoundHandler = (stream, headers) => {
  stream.respond({ ":status": 404 });
  stream.end("Page not found!");
};

// logic to determine which handler to call
const router = (stream, headers) => {
  const path = headers[":path"];
  const method = headers[":method"];
  let handler;

  if (path === "/" && method === "POST") {
    console.log('post');
    handler = postBook;
  }else if (path === "/" && method === "PUT"){
      handler = updateBook;
  } else if (path === "/" && method === "DELETE"){
      handler = deleteBook;
  } else {
      handler = notFoundHandler;
  }

  handler(stream, headers);
};

// action for server to take when stream event is emitted
server.on("stream", router);
server.on("error", (err) => console.log(err));

// start server on port 8000
server.listen(port, () => console.log(`Server started on port ${port}`));