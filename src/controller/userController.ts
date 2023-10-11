import { Request, Response } from "express";
import db from '../config/database';

async function listUsers(req: Request, res: Response) {
    db.connection.query('SELECT * FROM clients_ecommerce', (err, results) => {
        res.send(results);
    });
}

async function createUser(req: Request, res: Response) {
    const querySql = 'INSERT INTO clients_ecommerce(DS_NAME, NM_CPF) VALUES(?,?);';
    
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CPF
    );

    db.connection.query(querySql, params, (err, results) => {
        if (err) {
            res.status(404).json({
                succes: false,
                message: "Cadastro não realizado!",
            })
        }
        res.json({
            success: true,
            message: "Cadastro realizado com sucesso!",
            createdId: results
        });
    });
}
async function editUser(req: Request, res: Response) {
    // Remova a seguinte linha, pois envia uma resposta antes de enviar a resposta JSON abaixo.
    // res.send(`editUser ${req.params.idUser}`);

    const idUser = req.params.id;
    const querySql = 'UPDATE clients_ecommerce SET DS_NAME = ?, NM_CPF = ?, FL_STATUS = ? WHERE ID_CLIENT = ?;';

    const params = [
        req.body.DS_NAME,
        req.body.NM_CPF,
        req.body.FL_STATUS,
        idUser
    ];

    db.connection.query(querySql, params, (err, results) => {
        res.json({
            success: true,
            message: "Cadastro ALTERADO com sucesso",
            result: results
        });
    });
};

// Deletar Usuário
async function deleteUser(req: Request, res: Response) {
    const idUser = req.params.id;
    const querySql = 'DELETE FROM clients_ecommerce WHERE ID_CLIENT = ?;';

    const params = [idUser];

    db.connection.query(querySql, params, (err, results) => {
        if (err) {
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true,
                message: "Cadastro DELETADO com sucesso - Já era!",
                result: results
            });
        }
    });
};

export default {
    listUsers,
    createUser,
    editUser,
    deleteUser
}