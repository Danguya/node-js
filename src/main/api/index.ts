import '../config/module-alias'
import { PersonController, Speaker } from '@/application/controllers'

class Server {
  init (speaker: Speaker): any {
    console.log(speaker.speak('Danguya'))
    console.log(speaker.speak())
  }
}

const server = new Server()
server.init(new PersonController())
