/**
 * Required External Modules
 */

import { PrismaClient } from "@prisma/client";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";

const prisma = new PrismaClient()

const readline = require('readline-sync');

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

async function register_students(students_length: number){
	for(let counter = 1; counter <= students_length; counter++){
		
		console.log(`\nInserção do ${counter}º aluno`)

		let name = readline.question('\nNome do aluno: ')
		let age = parseInt(readline.question('Idade do aluno: '))
		let note = parseFloat(readline.question('Nota do aluno: '))

		await prisma.student.create({
			data: {
				name,
				age,
				note,
			}
		})
	}
}

app.listen(PORT, async () => {
	console.log(`Listening on port ${PORT}`);

	let students_length = parseInt(readline.question('\nQuantidade de alunos: '))

	await register_students(students_length);

	console.log("\nprograma finalizado!")
});
