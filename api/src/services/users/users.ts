import { Prisma } from '@prisma/client'
import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const User = {
  Member: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).Member(),
}
