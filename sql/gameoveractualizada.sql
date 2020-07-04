-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-07-2020 a las 03:13:05
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gameover`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `state` varchar(45) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `total` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carts`
--

INSERT INTO `carts` (`id`, `state`, `user_id`, `date`, `total`) VALUES
(1, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart_game`
--

CREATE TABLE `cart_game` (
  `id` int(11) NOT NULL,
  `cart_id` int(11) DEFAULT NULL,
  `games_id` int(11) DEFAULT NULL,
  `price` decimal(2,0) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Accion'),
(2, 'Aventura'),
(3, 'Deporte'),
(4, 'Horror'),
(5, 'Supervivencia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `distributors`
--

CREATE TABLE `distributors` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `distributors`
--

INSERT INTO `distributors` (`id`, `name`) VALUES
(1, 'Kojima Productions'),
(2, 'Electronic Arts'),
(3, 'Capcom'),
(4, 'Sony IE'),
(5, '2K Games'),
(6, 'Ubisoft'),
(7, 'Bethesda Softworks'),
(8, 'Square Enix'),
(9, 'Rockstar Games'),
(10, 'NAMCOM BANDAI');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `logo` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `video` varchar(100) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `age_clasification` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `distributor_id` int(11) DEFAULT NULL,
  `section_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `games`
--

INSERT INTO `games` (`id`, `name`, `logo`, `description`, `image`, `video`, `discount`, `release_date`, `age_clasification`, `price`, `category_id`, `distributor_id`, `section_id`) VALUES
(1, 'Death Stranding', 'dsl.png', 'El mundo ha caído bajo el dominio de Shinra Electric Power Company una siniestra corporación que controla la energía mako, la fuente de vida del planeta. En la extensa ciudad de Midgar, una organización antishinra autodenominada Avalancha ha iniciado la resistencia.Cloud Strife, un exmiembro de la unidad de elite SOLDADO de Shinra devenido mercenario', 'deathst.jpg', 'https://www.youtube.com/embed/FdzSLU3Ze7w', 20, '2019-11-08', 18, 3996, 5, 1, 1),
(2, 'FIFA 20', 'fifa20.png', 'FIFA 20 es la nueva edición de la saga de simulación deportiva de EA Sports, y la séptima entrega de la serie en la generación de consolas encabezada por Xbox One y PlayStation 4, así como por Nintendo Switch. Es la entrega más completa, ambiciosa y variada de FIFA en la última década, incluyendo modos rompedores como VOLTA Football.\n\n', 'fifa.jpg', 'https://www.youtube.com/embed/Wmhq0sGRuPU', 20, '2019-09-27', 3, 5000, 3, 2, 1),
(3, 'Resident Evil 2', 'r2.png', 'La trama transcurre en Raccoon City, una ciudad estadounidense cuya población en su mayoría ha sido transformada en zombi por el virus-T, un arma biológica desarrollada por la compañía Umbrella.', 'r2.jpg', 'https://www.youtube.com/embed/XPWY-71aZL', 20, '2019-01-25', 18, 4000, 4, 3, 1),
(4, 'The Last of Us 2', 'tlou2.png', 'The Last of Us: Part II es un próximo videojuego de acción-aventura desarrollado por Naughty Dog y publicado por Sony. Su lanzamiento está programado para el 19 de junio de 2020', 'tlof2.jpg', 'https://www.youtube.com/embed/VSLSvEjDm5s', 0, '2020-06-19', 18, 6999, 5, 4, 1),
(5, 'Borderlands 3', 'bl3.png', 'Borderlands 3​ es un videojuego de disparos en primera persona con elementos de rol, se trata de la secuela del videojuego de 2012, Borderlands 2. Fue desarrollado por Gearbox Software y distribuido por 2K Games para las plataformas Google Stadia, Microsoft Windows, PlayStation 4, Xbox One y Pc', 'b3.jpg', 'https://www.youtube.com/embed/caIE6CYzoA4', 20, '2019-09-21', 16, 3500, 1, 5, 2),
(6, 'Marvel\'s Spiderman', 'spide.png', 'Marvel\'s Spider-Man o simplemente Spider-Man (en Latinoamérica Spider-Man de Marvel), es una serie de televisión animada de acción-aventura, de ciencia ficción basada en los cómics de Spider-Man creados por Stan Lee y Steve Ditko. Reemplazo de la serie anterior Ultimate Spider-Man, siendo ahora un reinicio. Se estrenó el 19 de agosto de 2017 en Disney XD. y Cartoon Network Se estrenó el 12 de abril de 2019', 'spide.jpg', 'https://www.youtube.com/embed/K4zm30yeHHE', 20, '2018-09-07', 16, 3000, 1, 4, 2),
(7, 'Uncharted 4', 'unchar4.png', 'Uncharted 4: El desenlace del ladrón, es un videojuego de acción-aventura en tercera persona, lanzado el 10 de mayo de 2016, distribuido por Sony Computer Entertainment y desarrollado por Naughty Dog exclusivamente para PlayStation 4', 'uncharted.jpg', 'https://www.youtube.com/embed/hh5HV4iic1Y', 20, '2016-05-02', 16, 2000, 2, 4, 2),
(8, 'Assasin\'s Creed Odyssey', 'assa.png', 'Assassin\'s Creed Odyssey es un videojuego desarrollado por Ubisoft Quebec y publicado por Ubisoft. Es el decimoprimer juego de mayor importancia y el vigesimoprimero en general dentro de la saga Assassin\'s Creed, siendo posterior al juego Assassin\'s Creed Orígins, se trataría de una precuela', 'ass.jpg', 'https://www.youtube.com/embed/Asy_p4xStbk', 20, '2018-10-05', 18, 3000, 2, 6, 2),
(9, 'Doom Eternal', 'doom.png', 'Doom Eternal es un videojuego de acción y disparos en primera persona desarrollado por id Software y publicado por Bethesda Softworks.​ Es el quinto título principal de la serie Doom y la secuela directa del juego estrenado en 2016', 'doom.jpg', 'https://www.youtube.com/embed/YNpYpW5bbYk', 20, '2020-03-20', 18, 8000, 1, 7, 3),
(10, 'Final Fantasy 7 Remake', NULL, 'La historia sigue al mercenario Cloud Strife mientras él y el grupo eco-terrorista AVALANCHE luchan contra la corrupta megacorporación de Shinra y el legendario exsoldado de Shinra Sefirot. El videojuego combina la acción en tiempo real similar a Dissidia Final Fantasy con otros elementos estratégicos.', 'ff.jpg', 'https://www.youtube.com/watch?v=ERgrFVhL-n4', 20, '2020-04-10', 16, 6000, 4, 8, 3),
(11, 'GTA 5', NULL, 'El juego está ambientado en la ciudad ficticia de Los Santos, así como en las zonas que la rodean, basada en la ciudad de Los Ángeles y el sur de California. La ciudad también era la ambientación del anterior juego GTA:San Andreas. Por primera vez el juego se centraría en tres personajes distintos en vez de uno solo: Michael, Trevor y Franklin, además del personaje que el jugador utiliza en el modo en línea.', 'gtav.jpg', 'https://www.youtube.com/watch?v=hvoD7ehZPcM', 20, '2013-09-17', 18, 1500, 1, 9, 3),
(12, 'God of War', NULL, 'God of War transcurre en una versión alternativa de la Antigua Grecia, donde existen seres mitológicos como los dioses o los titanes. Con la excepción de flashbacks, los hechos transcurren entre los juegos Chains of Olympus (2008) y Ghost of Sparta (2010). Hay seis localizaciones a explorar, siendo reales el Mar Egeo o la ciudad de Atenas y ficticias el Desierto de las Almas Perdidas, el Templo de Pandora, el Inframundo y una pequeña escena en el Monte Olimpo.', 'gow2.jpg', 'https://www.youtube.com/watch?v=dK42JGgkoF8', 20, '2018-04-18', 18, 2000, 2, 4, 3),
(13, 'Read Dead Redemption 2', NULL, 'Al igual que la primera entrega, Red Dead Redemption 2 es un juego de acción y aventura, jugado tanto como primera como tercera persona, ambientado en el lejano oeste estadounidense y desarrollado en un entorno de mundo abierto con una versión ficticia del oeste, el medio oeste y el sur de los Estados Unidos en 1899, durante la segunda mitad de la era del Salvaje Oeste y el final de la era, a comienzos del siglo XX.', 'rd2.jpg', 'https://www.youtube.com/watch?v=eaW0tYpxyp0', 20, '2018-10-26', 18, 4000, 2, 9, NULL),
(14, 'UFC 3', '', 'EA Sports UFC 3 es la nueva entrega del simulador de lucha y combate de artes marciales mixtas. ... Cuenta con una tecnología revolucionaria, Real Player Motion (RPM), un nuevo tipo de animación que ofrece la jugabilidad más fluida de la serie, con transiciones más realistas y creíbles en los combates.', 'ufc3.jpg', 'https://www.youtube.com/watch?v=s0Xe1ggWDUI', 20, '2010-01-06', 18, 2500, 3, 2, NULL),
(15, 'Dragon Ball Kakaroto', 'dbz.png', 'Dragon Ball Z: Kakarot cubre la historia de Goku y los Guerreros Z, controlados por el jugador, a través de diferentes eventos icónicos en la historia de Dragon Ball Z, que van desde el comienzo de la Saga Saiyan hasta el final de la Saga Majin Buu.', 'dbz.jpg', 'https://www.youtube.com/embed/cL0roSDy_pU', 20, '2018-09-17', 18, 329, 1, 10, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `game_platform`
--

CREATE TABLE `game_platform` (
  `id` int(11) NOT NULL,
  `game_id` int(11) DEFAULT NULL,
  `platform_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `game_platform`
--

INSERT INTO `game_platform` (`id`, `game_id`, `platform_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 2, 2),
(4, 2, 3),
(5, 3, 1),
(6, 3, 2),
(7, 3, 3),
(8, 4, 1),
(9, 5, 1),
(10, 5, 2),
(11, 5, 3),
(12, 6, 1),
(13, 7, 1),
(14, 8, 1),
(15, 8, 2),
(16, 8, 3),
(17, 9, 1),
(18, 9, 2),
(19, 9, 3),
(20, 10, 1),
(21, 11, 1),
(22, 11, 2),
(23, 11, 3),
(24, 12, 1),
(25, 13, 1),
(26, 13, 2),
(27, 13, 3),
(28, 14, 1),
(29, 14, 2),
(30, 15, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platforms`
--

CREATE TABLE `platforms` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `platforms`
--

INSERT INTO `platforms` (`id`, `name`) VALUES
(1, 'PS4'),
(2, 'XBOX'),
(3, 'PC');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sections`
--

CREATE TABLE `sections` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sections`
--

INSERT INTO `sections` (`id`, `name`) VALUES
(1, 'Recomendados'),
(2, 'Ofertas'),
(3, 'Más Vendidos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `avatar` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `avatar`) VALUES
(36, 'jonathan', 'gonzalez', 'jonathang@hotmail.com.ar', '12345678', 'avatar-1593815862335.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `cart_game`
--
ALTER TABLE `cart_game`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `distributors`
--
ALTER TABLE `distributors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id_idx` (`category_id`),
  ADD KEY `distributor_id_idx` (`distributor_id`),
  ADD KEY `section_id_idx` (`section_id`);

--
-- Indices de la tabla `game_platform`
--
ALTER TABLE `game_platform`
  ADD PRIMARY KEY (`id`),
  ADD KEY `platform_game_id_idx` (`platform_id`),
  ADD KEY `game_platform_id_idx` (`game_id`);

--
-- Indices de la tabla `platforms`
--
ALTER TABLE `platforms`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `cart_game`
--
ALTER TABLE `cart_game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `carts` (`id`);

--
-- Filtros para la tabla `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `distributor_id` FOREIGN KEY (`distributor_id`) REFERENCES `distributors` (`id`),
  ADD CONSTRAINT `section_id` FOREIGN KEY (`section_id`) REFERENCES `sections` (`id`);

--
-- Filtros para la tabla `game_platform`
--
ALTER TABLE `game_platform`
  ADD CONSTRAINT `game_platform_id` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `platform_game_id` FOREIGN KEY (`platform_id`) REFERENCES `platforms` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
