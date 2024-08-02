import { Fragment } from "react";

const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

// export default function Poem() {
//     let output = [];

//     poem.lines.forEach((line, i) => {
//         output.push(
//             <hr key={i + '-seprator'} />
//         );
//         output.push(
//             <p key={i + '-index'}>
//                 {line}
//             </ p>
//         );
//     });

//     output.shift();

//     return (
//         <article>
//             {output}
//         </article>
//     );
// }

export default function Poem() {
    return (
        <article>
            {poem.lines.map((line, i) =>
                <Fragment key={i}>
                    {i > 0 && <hr />}
                    <p>{line}</p>
                </Fragment>
            )}
        </article>
    )
}
