import Title from "@/components/Title";

export default function HowItWorks() {
    return (
        <section>
            <Title size="h2">
                ¿Cómo funciona?
            </Title>
            <article className="w-[700px]">
                <p>
                    Simulador de dados online es una aplicación web que permite simular el lanzamiento de dados de cualquier cantidad de caras.
                </p>

                <br />
                <p>
                    1.	Ingrese la cantidad de lanzamientos a realizar, este valor debe ser un número entero mayor que cero y seleccione la cantidad de dados con los que desea probar
                </p>

                <br />
                <p>
                    2.	Haz clic en el botón de lanzar para lanzar los dados.
                </p>

                <br />
                <p>
                    3.	El lanzador de dados generará aleatoriamente los valores de los dados lanzados y los mostrará en una tabla educativa. La tabla debe mostrar la cantidad de veces que apareció cada número, así como el porcentaje de veces que apareció cada número en relación con la cantidad total de lanzamientos.
                </p>

                <br />
                <p>
                    4.	Si deseas lanzar los dados nuevamente con los mismos valores de cantidad y número, simplemente haz clic en el botón de lanzar. Si deseas cambiar los valores de cantidad y número, simplemente modifícalos en los campos correspondientes y haz clic en el botón de lanzar.
                </p>

            </article>
        </section>
    );
}