const Kanji =  require('../models/Kanji')

const getAllKanjiByGrade = async(req,res) => {
    const { grade } = req.params

    const kanjis = await Kanji.find({grade})
    if(!kanjis || kanjis.length == 0){
        return res.status(400).json({msg: "Couldn't fetch kanji"})
    }

    res.status(200).json(kanjis)
}

module.exports = { getAllKanjiByGrade }