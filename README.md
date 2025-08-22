# School Management System APIs

Node.js APIs for School Management using Express.js and MySQL. Supports adding schools and listing schools sorted by proximity to a given location.

## Features

- **Add School**: Register a new school with its name, address, latitude, and longitude.
- **List Schools**: Retrieve all schools, sorted by their proximity to a given latitude and longitude.
- **Input Validation**: Ensures valid and well-formatted input for school details and geolocation.
- **RESTful API**: Follows standard REST practices for resource management.

## Technologies Used

- Node.js
- Express.js
- MySQL (with `mysql2`)
- dotenv (for environment configuration)
- geolib (for distance calculations)

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MySQL database set up.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/uz-313/school-management-system_APIs.git
   cd school-management-system_APIs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your environment variables in a `.env` file:
   ```
   DB_HOST=your_mysql_host
   DB_PORT=your_mysql_port
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=your_database_name
   PORT=3000
   ```

### Database Setup

You can use either PowerShell, CMD, or Git Bash to set up the database and insert sample data.
Make sure you are in the root folder of the repository where `schema.sql` and `init/schools_data.sql` are located.

#### Create Database and Table

| Shell           | Command                                                                 |
|-----------------|------------------------------------------------------------------------|
| **CMD / Git Bash**  | `mysql -u your_username -p < schema.sql`                          |
| **PowerShell**      | Get-Content schema.sql | mysql -u your_username -p                |

#### Insert Sample Data

| Shell           | Command                                                                 |
|-----------------|------------------------------------------------------------------------|
| **CMD / Git Bash**  | `mysql -u your_username -p school_management < init/schools_data.sql`    |
| **PowerShell**      | `Get-Content init/schools_data.sql | mysql -u your_username -p school_management` |
| **(Alternative, works in all)** | `mysql -u your_username -p school_management < init/schools_data.sql`    |

**Note:**  
- Replace `your_username` with your actual MySQL username.
- You will be prompted for your MySQL password.
- If your MySQL server is running on a non-default port or another host, you can add `-h your_host -P your_port` to the mysql command.

### Start the Server

```bash
node app.js
```

## API Endpoints

### Add a School

- **POST** `/addSchool`
- **Body Parameters**:
  - `name` (varchar, required)
  - `address` (varchar, required)
  - `latitude` (number, required)
  - `longitude` (number, required)
- **Validation**: Ensures all required fields are present and formatted properly.

### List Schools (Sorted by Proximity)

- **GET** `/listSchools`
- **Query Parameters**:
  - `latitude` (number, required)
  - `longitude` (number, required)
- **Returns**: List of schools sorted by the distance to the provided coordinates.

## Example `.env` file

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_management
PORT=3000
```


---
*For any issues or contributions, please open an issue or pull request on the [project repository](https://github.com/uz-313/school-management-system_APIs).*
