import React from "react";
import useTitle from "../shared/hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
      <div className="bg-[rgba(255, 255, 255, 0.2)] rounded-2xl shadow-xl border-2 py-5 px-10">
        <div className="flex">
          <div className="bg-black w-1 h-auto mr-4"></div>
          <h2 className="text-2xl font-semibold">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
        </div>
        <p className="text-justify py-5">Access tokens are credentials issued after authentication for authorized requests, while refresh tokens obtain new access tokens. Access tokens are stored temporarily on the client-side, while refresh tokens should be securely stored in locations like HTTP-only cookies or encrypted storage. Best practices include preventing unauthorized access, using secure storage mechanisms, protecting against token theft, and ensuring secure transport. Access tokens expire, prompting the use of refresh tokens to obtain new ones without reauthentication. Tokens play a vital role in maintaining secure, authenticated access to protected resources in an application. Implementing appropriate token management and security measures is crucial to safeguarding user data and maintaining system integrity.</p>
      </div>
      <div className="bg-[rgba(255, 255, 255, 0.2)] rounded-2xl shadow-xl border-2 py-5 px-10">
        <div className="flex">
        <div className="bg-black w-1 h-auto mr-4"></div>
          <h2 className="text-2xl font-semibold">Compare SQL and NoSQL databases?</h2>
        </div>
        <p className="text-justify py-5">SQL and NoSQL databases differ in their data models, query languages, and scalability options. SQL databases have structured schemas, use SQL as the query language, and are suitable for complex queries and transactions. They scale vertically and are commonly used in relational applications. NoSQL databases have flexible data models, employ various query languages or APIs, and excel at handling unstructured or semi-structured data. They scale horizontally and are popular for web applications and real-time analytics. The choice between SQL and NoSQL depends on factors like data structure, scalability needs, and application requirements, as each type offers distinct advantages and is suited for different use cases.</p>
      </div>
      <div className="bg-[rgba(255, 255, 255, 0.2)] rounded-2xl shadow-xl border-2 py-5 px-10">
        <div className="flex">
        <div className="bg-black w-1 h-auto mr-4"></div>
          <h2 className="text-2xl font-semibold">What is express js? What is Nest JS?</h2>
        </div>
        <p className="text-justify py-5">Express.js is a minimalist and flexible web application framework for Node.js. It simplifies the development of web applications and APIs by providing a set of features for handling HTTP requests, routing, and middleware integration. With its modular architecture and extensive community support, Express.js allows developers to quickly build scalable and efficient web applications.
        <br />
        NestJS is a TypeScript-based web application framework for Node.js that offers a scalable and structured approach to server-side development. It emphasizes modularity, dependency injection, and follows a module-controller-service architectural pattern. With its powerful features, such as decorators and dependency injection, NestJS enables developers to build efficient and maintainable applications. It also provides integration capabilities and a thriving ecosystem of modules and plugins for added functionalities.
        </p>
      </div>
      <div className="bg-[rgba(255, 255, 255, 0.2)] rounded-2xl shadow-xl border-2 py-5 px-10">
        <div className="flex">
        <div className="bg-black w-1 h-auto mr-4"></div>
          <h2 className="text-2xl font-semibold">What is MongoDB aggregate and how does it work?</h2>
        </div>
        <p className="text-justify py-5">The MongoDB aggregate framework is a powerful tool for advanced data processing and analysis. It allows developers to construct pipelines consisting of multiple stages to perform operations like filtering, grouping, sorting, and aggregating data within a collection. Each stage in the pipeline applies a specific operation to the input documents and passes the result to the next stage. The aggregate framework supports operations such as matching, grouping, sorting, projecting, joining, and unwinding of data. By combining these stages, developers can create complex data transformations and perform sophisticated aggregations. This feature enables efficient querying and provides valuable insights from large datasets in MongoDB.</p>
      </div>
    </div>
  );
};

export default Blogs;
