# task_management

## Steps to run project
### git clone "https://github.com/AshanurHossain0/task_management.git"
### npm i
### npm start

## Routes
### User Route
#### User registration
- http://localhost:3000/user/register
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
