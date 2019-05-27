import { School } from './school';

export const SCHOOLS: School[] = [
  { 
    id: 1, 
    periodStart: new Date("08-01-2015"), periodEnd: new Date("09-01-2017"), 
    logo: "assets/cicese.jpg",
    name: "Centro de Investigación Científica y Educación Superior de Ensenada Baja California",
    orientation: "Computer Science",
    description:`Studied a full-time program on a research-oriented computer science degree. 
    Here I studied machine learning, genetic algorithms, bioinformatics, scheduling, image processing 
    and many other courses. Made many logic based machine learning systems. Applied Genetic Algorithms 
    to a set of interesting problems, such as tridimensional protein structure prediction.
    Specialized in scheduling algorithms for computational grids, clouds, and in high performance 
    computing. Made my thesis on algorithms for cloud VMs allocations. Using genetic algorithms 
    bi-objective genetic algorithms for VM’s cloud environment scheduling and published 2 articles on 
    CARLA and ISUM supercomputing congresses`
  },
  { 
    id: 2, 
    periodStart: new Date("07-01-2017"), periodEnd: new Date("07-01-2012"), 
    logo: "assets/ith.jpg",
    name: "Instituto Tecnológico de Hermosillo ",
    orientation: "Mechanic/Electronic Engineer",
    description:`Studied mechanic-electronic engineer, which included many IoT applications 
     used for industrial control and manufacturing. Also learned a lot of embedded systems programming
     and mechancis.`
  }
];