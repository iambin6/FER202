export function Exercise3() {
    const company = [
        { name: "Company One", category: "Finance", start: 1981, end: 2004 },
        { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
        { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
        { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
        { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
        { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
        { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
        { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
        { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
    ];
    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
    const stats = ages.reduce(
        (acc, age) => {
            acc.total += age;
            acc.min = Math.min(acc.min, age);
            acc.max = Math.max(acc.max, age);
            if (age >= 13 && age <= 19) {
                acc.groups.teen++;
            } else if (age >= 20) {
                acc.groups.adult++;
            }
            return acc;
        },
        { total: 0, min: Infinity, max: -Infinity, groups: { teen: 0, adult: 0 }, }
    );
    const sortedCompanies = [...company].sort((a, b) => a.end - b.end);
    const top3 = sortedCompanies.slice(0, 3);
    const company0New = { ...company[0], start: company[0].start + 1 };
    function concatAll(...arrays) {
        return arrays.flat();
    }
    const concatResult = concatAll([1, 2], [3], [4, 5]);
    return (
        <div>
            <h2>Top 3 công ty kết thúc sớm nhất:</h2>
            <ul>
                {top3.map(c => (<li key={c.name}>{`${c.name} - ${c.end}`}</li>))}
            </ul>

            <h2>Ví dụ Spread và Rest</h2>
            <p>{company[0].name}, start = {company[0].start}, end = {company[0].end}</p>
            <p>{company0New.name},start = {company0New.start}, end = {company0New.end}</p>
            <p>{concatResult.join(", ")}</p>
            <p>Total: {stats.total}, Min: {stats.min}, Max: {stats.max}</p>
            <p>Group: {"{ "}teen: {stats.groups.teen}, adult: {stats.groups.adult}{" }"}</p>
        </div>
    )
}