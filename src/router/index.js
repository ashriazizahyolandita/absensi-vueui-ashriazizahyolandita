import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/friends/Home.vue'
import Createfriends from '../views/friends/Createfriends.vue'
import Editfriends from '../views/friends/Editfriends.vue'
import Kontrakmatakuliah from '../views/kontrakmatakuliah/Kontrakmatakuliah.vue'
import Createkontrakmatakuliah from '../views/kontrakmatakuliah/Createkontrakmatakuliah.vue'
import Editkontrakmatakuliah from '../views/kontrakmatakuliah/Editkontrakmatakuliah.vue'
import Absensimahasiswa from '../views/absen/Absensimahasiswa.vue'
import Createabsen from '../views/absen/Createabsen.vue'
import Editabsen from '../views/absen/Editabsen.vue'
import Matakuliah from '../views/matakuliah/Matakuliah.vue'
import Creatematakuliah from '../views/matakuliah/Creatematakuliah.vue'
import Editmatakuliah from '../views/matakuliah/Editmatakuliah.vue'
import Jadwal from '../views/jadwal/Jadwal.vue'
import Createjadwal from '../views/jadwal/Createjadwal.vue'
import Editjadwal from '../views/jadwal/Editjadwal.vue'
import Semester from '../views/semester/Semester.vue'
import Createsemester from '../views/semester/Createsemester.vue'
import Editsemester from '../views/semester/Editsemester.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/createfriends',
        name: 'Createfriends',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Createfriends
    },
    {
        path: '/editfriends',
        name: 'Editfriends',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Editfriends
    },
    {
        path: '/kontrakmatakuliah',
        name: 'Kontrakmatakuliah',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Kontrakmatakuliah
    },
    {
        path: '/createkontrakmatakuliah',
        name: 'Createkontrakmatakuliah',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Createkontrakmatakuliah
    },
    {
        path: '/editkontrakmatakuliah',
        name: 'Editkontrakmatakuliah',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Editkontrakmatakuliah
    },
    {
        path: '/absensimahasiswa',
        name: 'Absensimahasiswa',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Absensimahasiswa
    },
    {
        path: '/createabsen',
        name: 'Createabsen',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Createabsen
    },
    {
        path: '/editabsen',
        name: 'Editabsen',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Editabsen
    },
    {
        path: '/matakuliah',
        name: 'Matakuliah',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Matakuliah
    },
    {
        path: '/creatematakuliah',
        name: 'Creatematakuliah',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Creatematakuliah
    },
    {
        path: '/editmatakuliah',
        name: ' Editmatakuliah',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Editmatakuliah
    },
    {
        path: '/kontrakmatakuliah',
        name: 'Kontrakmatakuliah',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Kontrakmatakuliah
    },
    {
        path: '/jadwal',
        name: 'Jadwal',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Jadwal
    },
    {
        path: '/createjadwal',
        name: 'Createjadwal',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Createjadwal
    },
    {
        path: '/editjadwal',
        name: 'Editjadwal',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Editjadwal
    },
    {
        path: '/semester',
        name: 'Semester',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Semester
    },

    {
        path: '/createsemester',
        name: 'Createsemester',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Createsemester
    },
    {
        path: '/editsemester',
        name: 'Editsemester',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Editsemester
    },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router