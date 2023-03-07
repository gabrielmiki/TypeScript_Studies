<h1> Criando um sistema de login com a Context API </h1>

<h2> 1. Criar LocalStorage </h2>

<ol>
    <li> Criar uma pasta de serviços </li>
    <li> Criar um arquivo <pre> .tsr  </pre> </li>
    <li> 
        Definir a do interface do objeto a ser criado: 
        <pre>
            interface IObjName {
                login: boolean
            }
        </pre>
    </li>
    <li> 
        Criar Objeto: 
        <pre> 
            const ObjName = {
                login: boolean
            }
    </li>
    <li> 
        Criar função para criação do LocalStorage:
        <pre>
            export const criaStorage = (): void => {
                localStorage.setItem('objName', JSON.stringify(ObjName))
            }
        </pre>
    </li>
    <li> 
        Criar funçao para alterar valor do LocalStorage:
        <pre> 
            export const changeStorage = (objName: IObjName): void => {
                localStorage.setItem('objName', JSON.stringify(objName))
            }
        </pre>
    </li>
    <li> 
        Criar funçao para verificar valor do LocalStorage:
        <pre> 
            export const getStorage = (): string | null => {
                return localStorage.getItem('objName')
            }
        </pre>
    </li>
</ol>

<h2> 2. Acessar Valor do LocalStorage nas Páginas </h2>

<ol>
    <li> 
        Criar LocalStorage no <pre> App.tsx </pre>:
        <pre> 
            if (!getStorage()) {
                criaStorage()
            }
        </pre>
    </li>
    <li> 
        Definir serviço para a validação de usuário e, 
        caso a condição seja atendida, mudar o valore do objeto:
        <pre> 
            const validadeUser = async (): void => {
                if (```Condição para validação de usuário```) {
                    changeStorage({ login: true })
                }
                else {
                    navigate('...')
                }
            }
        </pre>
    </li>
    <li> 
        Usar a função de validação criada na aplicação. Ex: 
        <pre> 
            onClick={() => validadeteUser(email, password)}
        </pre>
    </li>
    <li> 
        No arquivo de contexto global da aplicação, usar o <pre> useEffect </pre>
        para alterar o estado global da forma que desejar com base no conteúdo 
        armazenado no LocalSotorage 
        <pre>
            useEffect(() => {
                if (storage) {
                    const { login } = JSON.parse(storage)
                    setIsLoggedIn(login)
                }
            }, [])
        </pre>
    </li>
</ol>