let NavBar = {
    template : `<div>
                    <v-app-bar>
                        <v-container fluid>
                            <v-btn color="#0F1922" plain rounded class="ma-1" text v-for="title in titles"  :key="title">
                                <span class="pa-2">{{title}}</span>
                            </v-btn> 
                        </v-container>
                    </v-app-bar>
                </div>`,
    data() {
        return {
            titles: [
                'Inicio',
                'Quienes Somos',
                'Nuestro Equipo',
                'Nuestros Trabajos',
                'Contacto'
            ],
            pic : './imagenes/Logo.png'
        }
    },
}


let Home = {
    template: `<div>
                <v-parallax :src="pic" height="850">
                    <v-container fluid>
                        <v-row
                        justify="center"
                        >
                            <v-col
                                align="center"
                                md="6"
                                sm="2"
                            >   
                                <h1 class="display-3">BIENVENIDO</h1>
                                <v-btn text color="white" fab  @click="$vuetify.goTo('#who-are-template',{ offset: -5, duration: 1000})">
                                    <v-icon >mdi-chevron-down</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-parallax>
                </div>`,
    data() {
        return {
            pic: 'imagenes/image843.png'
        }
    },
}


let WhoAre = {
    template: ` <div id="who-are-template">
                    <v-container ma-8 flex>
                            <v-row class="justify-space-around" style="height:600px">
                                <v-col md="3" class="pa-5">
                                    <v-card flat>
                                        <v-card-title class="mb-5">
                                            <h2 class="display-2">
                                                <span class="myTitle">
                                                Quienes Somos
                                                </span>
                                            </h2>
                                        </v-card-title>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero ut eius atque, eum voluptates error saepe soluta! Consequatur atque voluptatem quibusdam. Est veniam id quo! Et magnam qui numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero ut eius atqueLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero ut eius atque</p> 
                                    </v-card>
                                </v-col>       
                                <v-col md="4" class="pa-5">
                                    <img src="imagenes/Group9.png" height="600px">
                                </v-col>
                            </v-row>
                    </v-container>
                </div>`
}

let Team = {
    template: ` <div>
                    <v-container ma-10 mt-15 text-center>
                        <h2 class="display-2 mt-5 ma-2">
                            <span class="myTitle">
                                Nuestro Equipo
                            </span>
                        </h2>
                        <v-sheet
                            id="sheet_team"
                        >
                            <v-slide-group
                            active-class="warning"
                            class="pa-4"
                            show-arrows
                            center-active
                            >
                            <v-row class="justify-center">
                                <v-slide-item
                                    v-for="user in users"
                                    :key="user.full_name"
                                    v-slot="{ active, toggle }"
                                >
                                        <v-card 
                                            :color="active ? 'undefined' : 'orange accent-2'"
                                            
                                            max-width="800px" 
                                            class="ma-5 my-15 elevation-5" 
                                            @click="toggle">
                                            <v-card-title>
                                                <v-row class="justify-center">
                                                    <v-avatar id="ateam" size="150" class="ma-4 ">
                                                        <v-img :src="user.picture">
                                                        </v-img>
                                                    </v-avatar>
                                                </v-row>
                                            </v-card-title>
                                            <v-card-text class="pa-2 white--text">
                                                    <h2 class="title font-weight-bold">
                                                        {{user.full_name}}
                                                    </h2>
                                                    <h3 class="subtitle-1 font-italic font-weight-regular">
                                                        {{user.position}}
                                                    </h3>
                                            </v-card-text>
                                            <v-card-actions class="justify-center pa-1">
                                                <v-btn small v-for="(social,i) in user.socials" :key="i" :href="social.href" target="_blank" text fab color="white">
                                                    <v-icon large>
                                                        {{social.icon}}
                                                    </v-icon>
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-slide-item>
                                </v-row>
                                </v-slide-group>
                       </v-sheet>
                    </v-container>
                </div>`,
    data() {
        return {
            users: [
                {
                    full_name: 'Fernando Barroso',
                    position: 'CEO',
                    picture: 'imagenes/fbarroso.jpg',
                    socials: [
                        { 
                            icon: 'mdi-github',
                            href: 'https://github.com/Ferjapolis'
                        },
                        {
                            icon: 'mdi-instagram',
                            href : 'https://www.instagram.com/ferjapolis/'
                        }
                    ]
                },
                {
                    full_name: 'Kevin Barroso',
                    position: 'Project Manager',
                    picture: 'imagenes/kbarroso.jpg',
                    socials: [
                        { 
                            icon: 'mdi-github',
                            href: 'https://github.com/madara8854'
                        },
                        {
                            icon: 'mdi-instagram',
                            href : 'https://www.instagram.com/kobouharriet/'
                        },
                        {
                            icon: 'mdi-facebook',
                            href: 'https://www.facebook.com/kbarrozo'
                        }
                    ]
                },
                {
                    full_name: 'Nicolas Ayos',
                    position: 'Developer',
                    picture: 'imagenes/nayos.jpg',
                    socials: [
                        { 
                            icon: 'mdi-github',
                            href: 'https://github.com/nicolasayos'
                        },
                        {
                            icon: 'mdi-instagram',
                            href : 'https://www.instagram.com/nicolasayos/'
                        },
                        {
                            icon: 'mdi-facebook',
                            href: 'https://www.facebook.com/nicolas.ayos'
                        }
                    ]
                },
                {
                    full_name: 'Nikolas Barroso',
                    position: 'Designer',
                    picture: 'imagenes/nbarroso.jpg',
                    socials: [
                        { 
                            icon: 'mdi-github',
                            href: 'https://github.com/Fisherplay'
                        },
                        {
                            icon: 'mdi-instagram',
                            href : 'https://www.instagram.com/nikolas.h17/'
                        }
                    ]
                },
                {
                    full_name: 'Lucas Nuñez',
                    position: 'Designer',
                    picture: 'imagenes/lnunez.jpg',
                    socials: [
                        { 
                            icon: 'mdi-github',
                            href: 'https://github.com/lucasjnunez2000'
                        },
                        {
                            icon: 'mdi-instagram',
                            href : 'https://www.instagram.com/_lucasn10/'
                        },
                        {
                            icon: 'mdi-facebook',
                            href: 'https://www.facebook.com/lucasjoel.nunez'
                        }
                    ]
                }
            ]
        }
    },
}

new Vue({
    el:'#app',
    vuetify:new Vuetify(),
    components:{
        'navbar': NavBar,
        'home': Home,
        'whoare' : WhoAre,
        'team' : Team,
    },
})