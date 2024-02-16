# AWS Cruddur Bootcamp

![](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoidzQ5bVBva0pyU1lDODd1Uy96dXFxelNnTEh0dHFXUXNRR3hLT2RzRmVOaTZ5T3ZadHpSS29CazZ2SHBYckc0VXJEWEI2NFBKalMwcWM4RHh1Tk02b3RnPSIsIml2UGFyYW1ldGVyU3BlYyI6IjZTSzAxY2NiTU4rMmJJVGsiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=main)

- Application: Cruddur

- Every layer from the VPC to the ECS Service were deployed with cloudformation

- Use pull request from main to prod branch to start the Codepipeline build and deploy - This is for the backend container only
- Use a custom ruby sync script to update the frontend code in s3. Use ./bin/frontend/sync script. Before running the sync script we need to build using ./bin/frontend/build script. It could take a few minutes for the cloudfront distribution to invalidate and update with the new code
- Cloudformation used to build the custom VPC, cluster, Service, DB, and CICD

![Cruddur Architecture](assets/cruddur-architecture.jpg)

![Cruddur Graphic](assets/cruddur-screenshot.jpg)

![Cruddur Codepipeline](assets/cruddur-codepipeline.jpg)

![Cruddur buildspec](assets/cruddur-buildspec.jpg)


