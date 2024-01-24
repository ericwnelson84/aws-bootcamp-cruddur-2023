# AWS Cruddur Bootcamp

![](https://codebuild.ca-central-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoidzQ5bVBva0pyU1lDODd1Uy96dXFxelNnTEh0dHFXUXNRR3hLT2RzRmVOaTZ5T3ZadHpSS29CazZ2SHBYckc0VXJEWEI2NFBKalMwcWM4RHh1Tk02b3RnPSIsIml2UGFyYW1ldGVyU3BlYyI6IjZTSzAxY2NiTU4rMmJJVGsiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=main)

- Application: Cruddur

- Use pull request from main to prod branch to start the Codepipeline build and deply - This is for the backend container only
- Use a custom ruby sync script to update the frontend code in s3. Use ./bin/frontend/sync script. Before running the sync script we need to build using ./bin/frontend/build script
- Cloudformation used to build the custom VPC, cluster, Service, DB, and CICD


![Cruddur Graphic](_docs/assets/cruddur-banner.jpg)

![Cruddur Screenshot](_docs/assets/cruddur-screenshot.png)

