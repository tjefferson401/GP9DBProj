// This file is written in node.js to connect to the SQL database
const oracledb = require('oracledb');

const orclInfo = {
  connectionConfig : {
      user          : "thomas.jefferson",
      password      : "xNOM4wPIrSW8EgxOJYlnvuNk",
      connectString : "oracle.cise.ufl.edu/orcl",
  },
  networkDirectory : `${process.env.HOME}/opt/oracle/instantclient_19_8`
}

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.initOracleClient({libDir: orclInfo.networkDirectory})


async function runSqlQueryAndReturnRows(sqlQuery) {

    let connection;
  
    try {
      connection = await oracledb.getConnection(orclInfo.connectionConfig);
  
      const result = await connection.execute(sqlQuery,{});
      console.log(result)
  
    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }

  const q = (
    `
    SELECT *
    FROM COUNTRY
    FETCH FIRST 5 ROWS ONLY
    `
  )
  
  runSqlQueryAndReturnRows(q);