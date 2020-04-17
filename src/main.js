import api from './api'

class App{
    constructor(){
        this.repositores = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]')

        this.registerHandlers()
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepositores(event);
    }

    setLoading(loading = true){
        if(loading=== true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id','loading');
        }else{
            document.getElementById('loading').remove();
        }
    }


    async addRepositores(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if(repoInput.length == 0)
            return;

        this.setLoading();
        
        try {
            const response = await api.get(`/repos/${repoInput}`);
        
            const { name, description, html_url, owner:{ avatar_url }} = response.data

            this.repositores.push({
                name,
                description,
                avatar_url,
                html_url
            });
            
            this.inputEl.value = '';

            this.render();
    
        } catch (error) {
            alert('Repositório não existe!')
            this.inputEl.value = '';
        }
        this.setLoading(false);
    }

    render(){
        this.listEl.innerHTML = '';

        this.repositores.forEach( repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let title = document.createElement('strong');
            title.appendChild(document.createTextNode(repo.name));

            let p = document.createElement('p');
            p.appendChild(document.createTextNode(repo.description));

            let url = document.createElement('a');
            url.setAttribute('target','_blank');
            url.setAttribute('href',repo.html_url);
            url.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(title);
            listItemEl.appendChild(p);
            listItemEl.appendChild(url);
            
            this.listEl.appendChild(listItemEl);
        });

        
    }
}

new App()