const adminTemplate = (prenom, nom, mail, texte) => {
    return `<!DOCTYPE html>
      <html>
      
      <head>
          <meta charset="utf-8">
          <title>Guillaume Pichaud</title>
          <style>
              .container {
                  width: 100%;
                  height: 100%;
                  padding: 20px;
                  background-color: rgb(32, 38, 46);
              }
      
              .email {
                  width: 80%;
                  margin: 0 auto;
                  background-color: #fff;
                  padding: 0px 0px 20px 0px;
                  font-family: Arial, Helvetica, sans-serif;
              }
      
              .email-header {
                  background: linear-gradient(148.74deg,
                    #0f4c75 2.49%,
                    #00ADB5 99.05%);
                  color: rgb(250, 250, 250);
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: 40px 40px;
              }
      
              .email-body {
                display: flex;
                align-items: center;
                padding: 30px;
                font-size: 1.15em;
                width: 90%;
                  margin: 0 auto;  
              }

              .email-body-container {
                margin-left: 40px;
                font-size: 1.15em;
              } 
                    
              .email-body-header {
                  margin-bottom: 30px;
                  font-size: 1.15em;
              }

              .email-body-main {
                  color: rgb(32, 38, 46);
                  margin-bottom: 30px;
              }

              .italic {
                font-style: italic;
                padding-left: 10px;
                font-style: 0.95em;
                color: #0f4c75;
              }   

              .logo {
                  width: 40px;
                  height: 40px;
                  margin-left: 40px;
              }
        </style>
      </head>
      
      <body>
          <div class="container">
              <div class="email">
                <div class="email-header">
                      <img class="logo" src="https://i.imgur.com/G0b6ldn.png" alt="logo" /> Message venant du Portfolio
                </div>
                <div class="email-body">
                        <div class="email-body-container">
                          <div class="email-body-header">
                              <p>Message venant de ${prenom} ${nom},</p>
                          </div>
                          <div class="email-body-main">
                            <p>Email : <span class="italic">${mail}</span></p>
                              <p>${texte}</p>
                          </div>
                      </div>
                </div>
          </div>
      </body>
      
      </html>
      `;
};

module.exports = adminTemplate;