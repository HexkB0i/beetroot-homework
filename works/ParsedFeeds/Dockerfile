# Use an official Python image from the Docker Hub
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /opinion-app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the Python dependencies inside the container
RUN pip install -r requirements.txt

# Copy your application code into the container
COPY ./app .

# Command to run your application (adjust this depending on your web framework)
CMD ["python", "server.py"]
