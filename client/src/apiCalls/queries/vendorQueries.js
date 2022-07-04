export const fetchAllVendors = async (url) => {
    const res = await fetch(url);
    const vendors = await res.json();
    return vendors;
    };
    
    