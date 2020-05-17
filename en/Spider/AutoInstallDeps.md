## Auto install dependency

For the developers who install Crawlab in Docker, it's complicated to update the container (such as down down & up) every time, because they need to reinstall the dependency of crawlers, which is a pain point for users who use Crawlab for a long time.

In order to solve the pain point of developers, Crawlab development team developed the function of automatic installation dependency.

In order to use the auto install dependent functions, users need to put 'requirements.txt'(Python) or 'package.json'(Node.js) in the crawler project in the crawler root directory and upload it to Crawlab. Crawlab will scan the code directory automatically. If 'requirements.txt' or 'package.json' exists, it will automatically execute the corresponding installation program and install the specified dependency on the Crawlab node.

For users who often need to restart Crawlab, you can store the required dependencies in the dependency configuration file (‘requirements.txt' or ’package.json'). After restarting Crawlab, it will install the corresponding dependencies automatically.