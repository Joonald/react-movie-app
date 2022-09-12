<div className='sort-by-btns'>
{GENRES.map((GENRE) => 
 <button
    key={GENRE.id}
    value={GENRE.id}
    text={GENRE.name}
    onClick={handleClick}>{GENRE.name}
    {/* <Link to={`/genre/${GENRE.id}`}>{GENRE.name}</Link> */}
</button>
)}
</div>