# Assignment 10 - APIs and Endpoints

Each question has its own folder with:
- `index.html` - user interface
- `app.js` - JavaScript / jQuery / Axios logic
- `db.json` - that question's own JSON Server database (at least 5 sample records)

## Before starting
1. Install Node.js.
2. Open a terminal in the folder of the question you want to run.
3. Start that question's JSON Server using the matching command below.
4. Keep that terminal open.
5. Open that question's `index.html` in your browser (double-click it or use Live Server).
6. Internet is required for the jQuery and Axios CDN libraries in Q1, Q3, and Q6.

JSON Server is pinned to version 0.17.4 for the commands below.

## Start servers (run one question at a time)

From the Assignment_10_APIs_Endpoints root folder:

Q1:
```powershell
cd .\Q1_Real_Time_Live_Search
npx json-server@0.17.4 --watch db.json --port 3001
```

Q2:
```powershell
cd .\Q2_Employee_Status_Dashboard
npx json-server@0.17.4 --watch db.json --port 3002
```

Q3:
```powershell
cd .\Q3_Task_Manager_With_Filters
npx json-server@0.17.4 --watch db.json --port 3003
```

Q4:
```powershell
cd .\Q4_Multi_API_Dashboard
npx json-server@0.17.4 --watch db.json --port 3004
```

Q5:
```powershell
cd .\Q5_College_Timetable_Viewer
npx json-server@0.17.4 --watch db.json --port 3005
```

Q6:
```powershell
cd .\Q6_User_Registration_Duplicate_Check
npx json-server@0.17.4 --watch db.json --port 3006
```

Stop a running server with Ctrl+C. To run a different question, open a new terminal or stop the previous server first.

## Browser testing
- Q1: type product names (e.g. `mouse`) and a nonsense word to test `No products found`.
- Q2: toggle an employee status. The status is saved by PATCH.
- Q3: choose each filter and check/uncheck a task. Completion is saved by PATCH.
- Q4: dashboard loads users, orders, and products simultaneously. To test the warning, stop the server and reload.
- Q5: choose each weekday. Thursday/Saturday/Sunday should show `No classes today.`
- Q6: try an existing email such as `aarav@example.com`, then a new email address.

The server data is saved in each question's own `db.json`.
