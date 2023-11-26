# task_management

## Steps to run project
### git clone "https://github.com/AshanurHossain0/task_management.git"
### npm i
### npm start

## Routes
### User Route
#### User registration
- http://localhost:3000/user/register
- method : POST
- request body
  ```yaml
  {
    "name":"Albert Einstein",
    "email":"albert@gmail.com",
    "password":"123456"
  }
  ```
- success response
```yaml
  {
    "status": true,
    "message": "Success",
    "data": {
        "name": "Albert Einstein",
        "email": "albert@gmail.com",
        "password": "$2b$08$2eMtyQArt25Xs3ytUTFOR.OdzCrEUSy.GcRQ6oG6VVc7E8ysx.KfW",
        "_id": "65631b87aabb1cbd0531615d",
        "__v": 0
      }
  }
```

#### User login
- http://localhost:3000/user/login
- method : POST
- request body
  ```yaml
  {
    "email":"albert@gmail.com",
    "password":"123456"
  }
  ```
- success response
```yaml
  {
    "status": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDM1ODYyODIsImlhdCI6MTcwMDk5NDI4MjE1MywidXNlcklkIjoiNjU2MzFiODdhYWJiMWNiZDA1MzE2MTVkIn0.G_qGR-2rAktdsveV6mLdx2J7MSkS0jFijcGueaWYZCI"
      }
  }
```
### Task Route
#### Create task
- http://localhost:3000/task
- method : POST
- request header must have "x-auth-token" key and value should be the token
- request body
  ```yaml
  {
    "title":"develop a ticket booking site",
    "description":"a ticket booking site development",
    "dueDate":"10/01/2024",
    "assignedUsers":["6562dcdaa661e1937977aac6"]
  }
  ```
- success response
  ```yaml
  {
    "status": true,
    "message": "Success"
  }
  ```
  #### Get all tasks
- http://localhost:3000/task
- method : GET
- request header must have "x-auth-token" key and value should be the token
- success response
  ```yaml
  {
    "status": true,
    "message": "Success",
    "data": [
        {
            "_id": "6562dbf9a661e1937977aabe",
            "title": "develop a recipe site",
            "description": "a recipe site development",
            "creator": "65620d9a607faffc164b0b1a",
            "assignedUsers": [
                "65620d9a607faffc164b0b1a"
            ],
            "dueDate": "30/01/2024",
            "isCompleted": false,
            "isDeleted": false,
            "__v": 0
        },
        {
            "_id": "6562e5a71178b1e70a341fc5",
            "title": "develop a e-commerce site",
            "description": "a e-commerce site development",
            "creator": "65620d9a607faffc164b0b1a",
            "assignedUsers": [
                "6562dcdaa661e1937977aac6"
            ],
            "dueDate": "30/02/2024",
            "isCompleted": false,
            "isDeleted": false,
            "__v": 0
        },
        {
            "_id": "65631f9378533eb96a32b28a",
            "title": "develop a ticket booking site",
            "description": "a ticket booking site development",
            "creator": "65620d9a607faffc164b0b1a",
            "assignedUsers": [
                "6562dcdaa661e1937977aac6"
            ],
            "dueDate": "10/01/2024",
            "isCompleted": false,
            "isDeleted": false,
            "__v": 0
        }
    ]
  }
  ```
