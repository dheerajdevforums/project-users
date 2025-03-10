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
3. Copy .env.example and rename as .env
    ```bash
    cp .env.example .env
    ```

4. Enter the credentials in .env

## Database Migration

To migrate the database, run the following command:

```shell
npx sequelize-cli db:migrate
```

