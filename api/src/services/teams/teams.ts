import { Prisma } from '@prisma/client'
import { db } from 'src/lib/db'

export const teams = () => {
  return db.team.findMany()
}

export const team = ({ id }: Prisma.TeamWhereUniqueInput) => {
  return db.team.findUnique({
    where: { id },
  })
}

interface CreateTeamArgs {
  input: Prisma.TeamCreateInput
}

export const createTeam = ({ input }: CreateTeamArgs) => {
  return db.team.create({
    data: input,
  })
}

interface UpdateTeamArgs extends Prisma.TeamWhereUniqueInput {
  input: Prisma.TeamUpdateInput
}

export const updateTeam = ({ id, input }: UpdateTeamArgs) => {
  return db.team.update({
    data: input,
    where: { id },
  })
}

export const deleteTeam = ({ id }: Prisma.TeamWhereUniqueInput) => {
  return db.team.delete({
    where: { id },
  })
}

export const Team = {
  Member: (_obj, { root }) =>
    db.team.findUnique({ where: { id: root.id } }).Member(),
}
