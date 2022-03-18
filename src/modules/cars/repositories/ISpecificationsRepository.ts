import { Specification } from "../model/Specification"

interface ICreateSpecificationDTO {
  name: string
  description: String
}

interface ISpecificationRepository {

  create({ name, description }: ICreateSpecificationDTO): void

  list(): Specification[]

  findById(id: string): Specification

  findByName(name: string): Specification

}

export { ISpecificationRepository, ICreateSpecificationDTO }
