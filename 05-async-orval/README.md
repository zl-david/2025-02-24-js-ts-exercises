# Exercise on API calls with Orval.js

1. Install dependencies: `npm install`
2. Run script with `npm run start`
3. Implement the followin features:

## Core Features

1. **List Pets by Status**

   - **Endpoint:** `GET /pet/findByStatus`
   - **Description:** Returns a list of pets filtered by status.
   - **Query Parameter:**
     - `status` (string): For example, `"available"`, `"pending"`, or `"sold"`.

2. **Get Pet Details**

   - **Endpoint:** `GET /pet/{petId}`
   - **Description:** Retrieves detailed information about a specific pet.
   - **Path Parameter:**
     - `petId` (integer): The ID of the pet.

3. **Add a New Pet**

   - **Endpoint:** `POST /pet`
   - **Description:** Adds a new pet to the store.
   - **Request Body:**
     - A JSON object representing the pet (e.g., fields like `id`, `category`, `name`, `photoUrls`, `tags`, and `status`).

4. **Update an Existing Pet**

   - **Endpoint:** `PUT /pet`
   - **Description:** Updates the details of an existing pet.
   - **Request Body:**
     - A JSON object containing the updated pet information (similar structure as when adding a pet).

5. **Delete a Pet**
   - **Endpoint:** `DELETE /pet/{petId}`
   - **Description:** Deletes a pet from the store using its ID.
   - **Path Parameter:**
     - `petId` (integer): The ID of the pet.
