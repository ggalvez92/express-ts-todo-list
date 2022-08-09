import { db } from "@src/utils/prisma";

export const create = async (data: any) => {
	const model = await db.taskGroup.create({
		data: {
			...data,
		},
	})
	return model;
}

export const read = async (id: string) => {
	const model = await db.taskGroup.findFirst({
		where: {
			id
		}
	})
	return model;
}

export const update = async (data: any) => {
	const model = await db.taskGroup.upsert({
		where: {
			id: data.id,
		},
		update: {
			...data
		},
		create: {
			...data
		},
	})
	return model;
}

export const list = async (authorId: string) => {
	return db.taskGroup.findMany({
		where: {
			authorId,
		},
	});
}

export const destroy = async (id: string) => {
	const model = await db.taskGroup.update({
		where: {
			id,

		},
		data: {
			deletedAt: new Date()
		}
	})

	return model;
}