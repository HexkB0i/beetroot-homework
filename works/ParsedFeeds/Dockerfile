# Use an official Python image from the Docker Hub
FROM python:3.9-slim
ENV PYTHONUNBUFFERED=1

# Set the working directory inside the container
WORKDIR /technica

# Copy the requirements file into the container
COPY requirements.txt .

# Install the Python dependencies inside the container
RUN pip install -r requirements.txt

# Copy your application code into the container
COPY ./app .

EXPOSE 8080

# Command to run your application (adjust this depending on your web framework)
CMD ["python", "server.py"]
