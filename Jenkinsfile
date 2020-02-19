def IMG_NAME = 'test-any'
def CONTAINER_NAME = 'test-any'

pipeline {
  agent any

  stages {
    stage('Clear old container') {
      steps {
        script {
          try {
            sh "docker rm -f ${CONTAINER_NAME}"
          } catch (exc) {
            echo "Not Found container:${CONTAINER_NAME} "
            echo "${exc}"
          }
        }
      }
    }
    stage('Build') {
      steps {
        sh "docker build -t ${IMG_NAME} -f Dockerfile ."
        sh "docker run --name ${CONTAINER_NAME} -d --rm -p 8099:80 ${IMG_NAME}"
      }
    }
  }

  post {
    success {
      echo 'success'
    }
    failure {
      echo 'fail'
    }
  }
}

// pipeline {
//   agent none

//   stages {
//     stage('First Step') {
//       steps {
//         echo 'First Step!'
//       }
//     }

//     stage('Build Image') {
//       agent {
//         dockerfile {
//           additionalBuildArgs  '-t test-any'
//           args '-p 8099:80'
//         }
//       }
//       steps {
//         echo 'Build Step!'
//       }
//     }
//   }

//   post {
//     success {
//       echo 'success ======'
//     }
//     failure {
//       echo 'fail ======'
//     }
//   }
// }
