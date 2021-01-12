* [users](#users)
  * [register](#register)
  * [sign in](#sign_in)
  * [sign out](#sign_out)
  * [get admin status](#get_admin_status)
* [questions](#questions)
  * [get all public questions](#get_all_public_questions)
  * [get a public question by ID](#get_a_public_question_by_ID)
  * [get all questions](#get_all_questions)
  * [get a question by ID](#get_a_question_by_ID)
  * [post a question](#post_a_question)
  * [post an answer](#post_an_answer)



## Users

### Register

| data        |                   |
| ----------- | ----------------- |
| uri         | /register         |
| method      | POST              |
| description | add an admin user |

* parameters

  | key      | type   | description               |
  | -------- | ------ | ------------------------- |
  | username | string | the name of the admin     |
  | password | string | the password of the admin |

* return examples

  200 OK

  ```json
  {
      "msg": "Register successfully"
  }
  ```



### Sign_in

| data        |                       |
| ----------- | --------------------- |
| uri         | /login                |
| method      | POST                  |
| description | sign in as admin user |

* parameters

  | key      | type   | description               |
  | -------- | ------ | ------------------------- |
  | username | string | the name of the admin     |
  | password | string | the password of the admin |

* return examples

  200 OK

  ```json
  {
      "username": "admin"
  }
  ```

  403 (Username not found)

  ```json
  {
      "msg": "Invalid username"
  }
  ```

  403 (Username and password don't matched)

  ```json
  {
      "msg": "Credentials don't match"
  }
  ```

### Sign_out

| data        |                        |
| ----------- | ---------------------- |
| uri         | /logout                |
| method      | POST                   |
| description | sign out as admin user |

* return example

  200 OK

  ```json
  {
  	"msg": "Logout successfully"
  }
  ```

### Get_admin_status

| data         |                                                            |
| ------------ | ---------------------------------------------------------- |
| uri          | /status                                                    |
| method       | GET                                                        |
| description  | get the status of the admin                                |
| return value | -1 for unregistered,  0 for not signed in, 1 for signed in |

* return example

  200 OK

  ```json
  {
      "status": 1
  }
  ```



## Questions

### Get_all_public_questions

| data             |                                                    |
| ---------------- | -------------------------------------------------- |
| uri              | /question                                          |
| method           | GET                                                |
| description      | get all questions that are public by a guest users |
| admin privileges | not required                                       |

* return example

  200 OK

  ```json
  [
      {
          "id": 1,
          "date": "2021-01-12T07:21:53.872Z",
          "question": "I am a question",
          "public": 1,
          "answer": "I am an answer",
          "answer_date": "2021-01-12T07:23:37.539Z"
      },
      {
          "id": 2,
          "date": "2021-01-12T07:22:53.872Z",
          "question": "I am another question",
          "public": 1,
          "answer": "I am another answer",
          "answer_date": "2021-01-12T07:25:37.539Z"
      }
  ]
  ```

### Get_a_public_question_by_ID

| data            |                                                 |
| --------------- | ----------------------------------------------- |
| uri             | /question/{id}                                  |
| method          | GET                                             |
| description     | get a question that are public by a guest users |
| admin privilege | not required                                    |

* return example (`GET /question/1`)

  200 OK

  ```json
  {
      "id": 1,
      "date": "2021-01-12T07:21:53.872Z",
      "question": "I am a question",
      "public": 1,
      "answer": "I am an answer",
      "answer_date": "2021-01-12T07:23:37.539Z"
  }
  ```

### Get_all_questions

| data            |                                     |
| --------------- | ----------------------------------- |
| uri             | /all                                |
| method          | GET                                 |
| description     | get all questions by the admin user |
| admin privilege | required                            |

* return example

  ```json
  [
      {
          "id": 1,
          "date": "2021-01-12T07:21:53.872Z",
          "question": "I am a question",
          "public": 1,
          "answer": "I am an answer",
          "answer_date": "2021-01-12T07:23:37.539Z"
      },
      {
          "id": 2,
          "date": "2021-01-12T07:22:53.872Z",
          "question": "I am another question",
          "public": 1,
          "answer": "I am another answer",
          "answer_date": "2021-01-12T07:25:37.539Z"
      },
      {
          "id": 3,
          "date": "2021-01-12T08:51:15.883Z",
          "question": "I am a question which is not answered",
          "public": -1,
      },
      {
          "id": 4,
          "date": "2021-01-12T08:51:24.495Z",
          "question": "I am a question which is private",
          "public": 0,
          "answer": "I am a private answer",
          "answer_date": "2021-01-12T08:52:14.107Z"
      }
  ]
  ```

### Get_a_question_by_ID

| data            |                              |
| --------------- | ---------------------------- |
| uri             | /all/{id}                    |
| method          | GET                          |
| description     | get a question by admin user |
| admin privilege | required                     |

* return example (`GET /all/4`)

  200 OK

  ```json
  {
      "id": 4,
      "date": "2021-01-12T08:51:24.495Z",
      "question": "I am a question which is private",
      "public": 0,
      "answer": "I am a private answer",
      "answer_date": "2021-01-12T08:52:14.107Z"
  }
  ```

### Post_a_question

| data            |                 |
| --------------- | --------------- |
| uri             | /question       |
| method          | POST            |
| description     | post a question |
| admin privilege | not required    |

* parameters

  | key      | type   | description               |
  | -------- | ------ | ------------------------- |
  | question | string | the value of the question |

* return example

  200 OK

  ```json
  {
      "id": 5,
      "question": "I am a test question"
  }
  ```

### Post_an_answer

| data            |                                             |
| --------------- | ------------------------------------------- |
| uri             | /answer/{id}                                |
| method          | POST                                        |
| description     | post an answer for the question given by ID |
| admin privilege | required                                    |

* parameter

  | key    | type   | description                                                |
  | ------ | ------ | ---------------------------------------------------------- |
  | public | number | -1 for not answered (default), 0 for private, 1 for public |
  | answer | string | the answer for the question                                |

* return example
  200 OK

  ```json
  {
      "id": 5,
      "date": "2021-01-12T09:10:35.550Z",
      "question": "I am a test question",
      "public": 1,
      "answer": "I am a test answer",
      "answer_date": "2021-01-12T09:17:59.210Z"
  }
  ```

  401 Unauthorized

  ```json
  {
      "msg": "Unauthorized"
  }
  ```