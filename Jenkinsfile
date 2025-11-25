pipeline {
    agent any

    environment {
        DOCKERHUB_USER = "suja350"
        DOCKERHUB_PASS = "dckr_pat_LjyNsl45sTeQsXH6Opyayt2mLUg"
        IMAGE_NAME = "simple-node-app"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/21CSE49/Suja-practice-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_USER/$IMAGE_NAME:latest .'
            }
        }

        stage('Login to DockerHub') {
            steps {
                sh 'echo $DOCKERHUB_PASS | docker login -u $DOCKERHUB_USER --password-stdin'
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh 'docker push $DOCKERHUB_USER/$IMAGE_NAME:latest'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }
    }
}
