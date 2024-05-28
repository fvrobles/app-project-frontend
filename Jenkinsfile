pipeline {
    agent any

    environment {
        VERSION = "1.0.${env.BUILD_ID}"
    }

    stages {
        stage('Build Docker image') {
            steps {
                sh 'docker build -t localhost:5000/frontend:${VERSION} .'
            }
        }
        stage('Push Docker image') {
            steps {
                sh 'docker push localhost:5000/frontend:${VERSION}'
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                    sed -i "s/<VERSION>/${VERSION}/g" deployment.yml &&\
                    kubectl apply -f deployment.yml
                '''
            }
        }
    }
}
