function Variant({ variants, addVariant, updateVariant, removeVariant }) {
    return (
      <div className="variants col-span-1 md:col-span-2">
        <h4 className="font-medium mb-2">Variants</h4>
        {variants.map((v, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row gap-2 mb-2 items-stretch sm:items-center"
          >
            <input
              placeholder="Size"
              value={v.size}
              onChange={(e) => updateVariant(i, "size", e.target.value)}
              className="border p-2 rounded flex-1"
            />
            <input
              placeholder="Color"
              value={v.color}
              onChange={(e) => updateVariant(i, "color", e.target.value)}
              className="border p-2 rounded flex-1"
            />
            <input
              placeholder="Quantity"
              type="number"
              value={v.quantity}
              onChange={(e) =>
                updateVariant(i, "quantity", Number(e.target.value))
              }
              className="border p-2 rounded w-full sm:w-20"
            />
            <button
              type="button"
              onClick={() => removeVariant(i)}
              className="bg-red-600 text-white px-2 rounded h-10 sm:h-auto"
            >
              ×
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addVariant}
          className="bg-green-600 text-white px-3 py-1 rounded mb-4 w-full sm:w-auto"
        >
          + Add Variant
        </button>
      </div>
    );
}

export default Variant
