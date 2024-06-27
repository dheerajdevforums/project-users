## Installation

To install the shared ORM library, follow these steps:

1. Run the following command to install the required dependencies:

    ```shell
    npm install
    ```

2. Additionally, install the Sequelize CLI as a development dependency:

    ```shell
    npm install --save-dev sequelize-cli
    ```
3. Setup credentials by creating a copy of .env.example and name the file as .env

4. Fill the required credentials

## Database Migration

To migrate the database, run the following command:

```shell
npx sequelize-cli db:migrate
```

