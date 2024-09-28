import { createPool } from 'mysql2/promise';

const myPoolConnection = () => {
    try {
        const pool = createPool({
        host: 'localhost',
        user: 'root',
        database: 'checoffee',
        port: 3306
    })
    return pool
    } catch (error) {
        console.error('Connection error')
    }
}

const conn = myPoolConnection();
export { conn }